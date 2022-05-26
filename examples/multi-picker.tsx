/* eslint:disable:no-console */

import * as React from "react";
import { createRoot } from "react-dom/client";

import MultiPicker from "../src/MultiPicker";
import Picker from "../src/Picker";

class Test extends React.Component<any, any> {
  state = {
    value: ["1", "11"],
  };

  onChange = (value) => {
    console.log("onChange", value);
    this.setState({
      value,
    });
  };

  onScrollChange = (value) => {
    console.log("onScrollChange", value);
  };

  render() {
    return (
      <div style={{ background: "#f5f5f9", padding: 10 }}>
        <MultiPicker
          selectedValue={this.state.value}
          onValueChange={this.onChange}
          onScrollChange={this.onScrollChange}
        >
          <Picker indicatorClassName="my-picker-indicator">
            <Picker.Item className="my-picker-view-item" value="1">
              one
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="2">
              two
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="3">
              three
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="4">
              four
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="5">
              five
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="6">
              six
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="7">
              seven
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="8">
              eight
            </Picker.Item>
          </Picker>
          <Picker indicatorClassName="my-picker-indicator">
            <Picker.Item className="my-picker-view-item" value="11">
              eleven
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="12">
              twelve
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="13">
              thirteen
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="14">
              fourteen
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="15">
              fifteen
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="16">
              sixteen
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="17">
              seventeen
            </Picker.Item>
            <Picker.Item className="my-picker-view-item" value="18">
              eighteen
            </Picker.Item>
          </Picker>
        </MultiPicker>
      </div>
    );
  }
}

const container = document.getElementById("__react-content");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<Test tab="home" />);
