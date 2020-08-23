import { FC, ReactElement } from 'react';
import { InputProps } from "../Input/Input";
export declare type DataSourceItemType<T = {}> = T & {
    value: string;
};
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    /**过滤方法 */
    fetchSuggestions: (keword: string) => DataSourceItemType[] | Promise<DataSourceItemType[]>;
    /**选项选择后回调 */
    onSelect: (item: DataSourceItemType) => void;
    /**options template */
    renderOption?: (item: DataSourceItemType) => ReactElement;
}
/**
 * AutoComplete 自动补全输入框
 *
 */
export declare const AutoComplete: FC<AutoCompleteProps>;
export default AutoComplete;
