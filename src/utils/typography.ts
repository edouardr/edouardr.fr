import Typography from 'typography';
import noriegaTheme from 'typography-theme-noriega';
import CodePlugin from 'typography-plugin-code';

noriegaTheme.plugins = [new CodePlugin()];

const typography = new Typography(noriegaTheme);

export default typography;
