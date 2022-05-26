import * as React from "react";
import classnames from "classnames";

import MultiPickerMixin from "./MultiPickerMixin";

import "../assets/index.css";

export interface IPickerCol {
  key?: string;
  props?: any;
}

export interface MultiPickerProps {
  prefixCls?: string;
  selectedValue?: any[];
  className?: string;
  rootNativeProps?: any;
  onValueChange?: (v?: any, i?: number) => void;
  children?: any;
  style?: any;
  onScrollChange?: (v?: any, i?: number) => void;
}

export interface IMultiPickerProp {
  getValue: () => any;
}

const MultiPicker = (props: IMultiPickerProp & MultiPickerProps) => {
  const { prefixCls, className, rootNativeProps, children, style } = props;
  const selectedValue = props.getValue();
  const colElements = React.Children.map(children, (col: any, i) => {
    return React.cloneElement(col, {
      selectedValue: selectedValue[i],
      onValueChange: (...args) => props.onValueChange!(i, ...args),
      onScrollChange:
        props.onScrollChange &&
        ((...args) => props.onScrollChange!(i, ...args)),
    });
  });
  return (
    <div
      {...rootNativeProps}
      style={style}
      className={classnames(className, prefixCls)}
    >
      {colElements}
    </div>
  );
};

export default MultiPickerMixin(MultiPicker);
