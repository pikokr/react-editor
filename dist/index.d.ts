import { PluginInterface } from '@easylogic/editor';

interface EditorViewProps {
    plugins?: PluginInterface[];
}
declare function EditorView({ plugins }: EditorViewProps): JSX.Element;

export { EditorView as default };
