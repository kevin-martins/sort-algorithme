import { SortDisplay, SortType } from "./sort"

export type OptionProps = {
    value: SortType | SortDisplay,
    text: string,
}

export type SelectProps = {
    name: string,
    onChange: any,
    options: OptionProps[],
}