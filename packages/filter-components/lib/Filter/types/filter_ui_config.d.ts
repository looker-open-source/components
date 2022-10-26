export declare enum FilterUIDisplay {
    INLINE = "inline",
    OVERFLOW = "overflow",
    POPOVER = "popover"
}
export declare enum FilterUIType {
    Advanced = "advanced",
    ButtonGroup = "button_group",
    Checkboxes = "checkboxes",
    RadioButtons = "radio_buttons",
    ButtonToggles = "button_toggles",
    DropdownMenu = "dropdown_menu",
    TagList = "tag_list"
}
export interface FilterUIConfig {
    display: string;
    options?: any;
    type: string;
}
