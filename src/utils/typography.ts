import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';
import noriegaTheme from 'typography-theme-noriega';

noriegaTheme.plugins = [new CodePlugin()];

noriegaTheme.baseFontSize = '18px';
noriegaTheme.baseLineHeight = 1.61;
noriegaTheme.headerFontFamily = ['JetBrains Mono', 'Lato', 'sans-serif'];
noriegaTheme.bodyFontFamily = ['JetBrains Mono', 'Lato', 'sans-serif'];
noriegaTheme.bodyWeight = 500;
noriegaTheme.headerWeight = 900;
noriegaTheme.boldWeight = 900;

const typography = new Typography(noriegaTheme);

export default typography;
