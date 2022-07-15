interface Item {
    label: string,
    link: string
}

export interface DropDowntypes {
    label: string,
    link: string,
    children?: Array<Item>
}
