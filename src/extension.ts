import * as path from "path";
import * as vscode from "vscode";
import * as fs from "fs";
import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
} from "vscode-languageclient/node";

let client: LanguageClient;

export function activate(context: vscode.ExtensionContext) {
    const absolutePath = path.join(
        process.env.HOME || "",
        ".sup",
        "bin",
        "souls",
    );
    const serverCommand = fs.existsSync(absolutePath) ? absolutePath : "souls";

    const serverOptions: ServerOptions = {
        command: serverCommand,
        args: [],
    };

    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: "file", language: "soma" }],
        synchronize: {
            fileEvents: vscode.workspace.createFileSystemWatcher("**/*.soma"),
        },
    };

    const outputChannel = vscode.window.createOutputChannel(
        "Soma Language Server",
    );
    context.subscriptions.push(outputChannel);

    client = new LanguageClient(
        "souls",
        "SouLS (Soma Language Server)",
        serverOptions,
        clientOptions,
        false,
    );

    client.start();

    // Register commands
    context.subscriptions.push(
        vscode.commands.registerCommand("soma.restartServer", async () => {
            await client.stop();
            await client.start();
            vscode.window.showInformationMessage(
                "Soma Language Server restarted",
            );
        }),
    );

    context.subscriptions.push(
        vscode.commands.registerCommand("soma.showOutput", () => {
            outputChannel.show();
        }),
    );
}

export function deactivate(): Thenable<void> | undefined {
    return client?.stop();
}
