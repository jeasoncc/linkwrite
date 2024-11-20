import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";
import { fromEvent, Subject, throttleTime } from "rxjs";
import { useObservable, useSubscription } from "observable-hooks";

// function MyOnChangePlugin({ onChange}){
//     const [editor] = useLexicalComposerContext()
//
//     useEffect(() => {
//       return editor.registerUpdateListener(({editorState}) => {
//             onChange(editorState)
//         })
//     },[editor, onChange])
// }

// interface MyOnChangePluginProps {
// 	onChange: (editorState: any) => void;
// }
//
// export const MyOnChangePlugin: React.FC<MyOnChangePluginProps> = ({
// 	onChange,
// }) => {
// 	const [editor] = useLexicalComposerContext();
// 	const editorStateSubject = new Subject<any>();
//
// 	useEffect(() => {
// 		const subscription = editorStateSubject
// 			.pipe(throttleTime(1000)) // 每1分钟限流一次
// 			.subscribe((editorState) => {
// 				onChange(editorState);
// 			});
//
// 		const unregister = editor.registerUpdateListener(({ editorState }) => {
// 			editorStateSubject.next(editorState);
// 		});
//
// 		return () => {
// 			subscription.unsubscribe();
// 			unregister();
// 		};
// 	}, [editor, onChange]);
//
// 	return null;
// };

interface MyOnChangePluginProps {
	onChange: (editorState: any) => void;
}

export const MyOnChangePlugin: React.FC<MyOnChangePluginProps> = ({
	onChange,
}) => {
	const [editor] = useLexicalComposerContext();
	const editorStateSubject = new Subject<any>();

	// 使用 useObservable 创建一个限流后的 Observable
	const throttledEditorState$ = useObservable(
		() => editorStateSubject.pipe(throttleTime(60000)), // 每1分钟限流一次
	);

	// 使用 useSubscription 订阅限流后的 Observable
	useSubscription(throttledEditorState$, (editorState) => {
		onChange(editorState);
	});

	useEffect(() => {
		const unregister = editor.registerUpdateListener(({ editorState }) => {
			editorStateSubject.next(editorState);
		});

		return () => {
			unregister();
		};
	}, [editor]);

	return null;
};
