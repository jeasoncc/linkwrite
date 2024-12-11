/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React, { useState } from "react";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";

import TreeViewPlugin from "./plugins/TreeViewPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { MyOnChangePlugin } from "./plugins/MyOnChangePlugin";
import { editorConfig } from "./config/editorConfig";
import { EditorState } from "lexical";

import "./index.scss";
import { pinoLogger } from "pck-log";
const placeholder = "Enter some rich text...";

interface AppProps {
    saveState?: (state: any) => void;
}

const App: React.FC<AppProps> = ({ saveState = () => { } }) => {

    const onChange = (editorState: EditorState) => {
        const editorStateJSON = editorState.toJSON();
        pinoLogger.info(editorStateJSON)
        return saveState(editorStateJSON)
        // return saveState(JSON.stringify(editorStateJSON));
    };

    return (
        <LexicalComposer initialConfig={editorConfig}>
            <div className="editor-container">
                <ToolbarPlugin />
                <div className="editor-inner">
                    <RichTextPlugin
                        contentEditable={
                            <ContentEditable
                                className="editor-input"
                                aria-placeholder={placeholder}
                                placeholder={
                                    <div className="editor-placeholder">{placeholder}</div>
                                }
                            />
                        }
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <HistoryPlugin />
                    <AutoFocusPlugin />
                    <MyOnChangePlugin onChange={onChange} />
                    <TreeViewPlugin />
                </div>
            </div>
        </LexicalComposer>
    );
};

export default App;
