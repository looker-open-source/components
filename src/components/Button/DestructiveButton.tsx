import { rgba } from 'polished'
import { Button } from './Button'

export const DestructiveButton = Button.extend`

--primary: ${(props) => props.theme.colors.destructive };
--hover: ${(props) => props.theme.colors.destructiveDark };
--active: ${(props) => props.theme.colors.destructiveDarker };
--transparentActive: ${(props) => props.theme.colors.destructiveLighter };
--textColor: ${(props) => props.theme.colors.destructiveText };
--accessibilityOutline ${(props) => rgba(props.theme.colors.destructive, .25)};
`
