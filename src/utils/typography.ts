import Typography from 'typography';
import noriegaTheme from 'typography-theme-noriega';
import CodePlugin from 'typography-plugin-code';

noriegaTheme.plugins = [new CodePlugin()];
noriegaTheme.baseFontSize = '13px';
noriegaTheme.headerFontFamily = ['JetBrains Mono', 'Lato', 'sans-serif'];
noriegaTheme.bodyFontFamily = ['JetBrains Mono', 'Lato', 'sans-serif'];
const typography = new Typography(noriegaTheme);

export default typography;
