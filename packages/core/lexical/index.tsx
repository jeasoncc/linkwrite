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

import "./style.css";
import TreeViewPlugin from "./plugins/TreeViewPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { MyOnChangePlugin } from "./plugins/MyOnChangePlugin";
import { editorConfig } from "./config/editorConfig";
import { EditorState } from "lexical";

const placeholder = "Enter some rich text...";

interface AppProps {
    saveState?: (state: string) => void;
}

const App: React.FC<AppProps> = ({ saveState = (x) => { } }) => {
    // const [editorState, setEditorState] = useState<EditorState | undefined>(
    //     undefined,
    // );

    const onChange = (editorState: EditorState) => {
        const editorStateJSON = editorState.toJSON();
        return saveState(JSON.stringify(editorStateJSON));
        // setEditorState(editorState);
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
