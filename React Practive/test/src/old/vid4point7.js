import React, { useContext } from "react";
import Switch from "./Switch";
import "./styles.css";
import { useState } from "react";

const ToggleContext = React.createContext();

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
  }

  static On({ children }) {
    return (
      <ToggleContext.Consumer>
        {(value) => {
          const { on } = value;
          return on ? children : null;
        }}
      </ToggleContext.Consumer>
    );
    // return on ? children : null;
  }

  static Off({ children }) {
    return (
      <ToggleContext.Consumer>
        {(value) => {
          const { on } = value;
          return on ? null : children;
        }}
      </ToggleContext.Consumer>
    );
    // return on ? null : children;
  }

  static CheckBox() {
    return (
      <ToggleContext.Consumer>
        {(value) => {
          const { on, onClick } = value;
          return <Switch on={on} onClick={onClick} />;
        }}
      </ToggleContext.Consumer>
    );
    // return <Switch on={on} onClick={onClick} />;
  }

  onClick = () => {
    const { onToggle } = this.props;
    this.setState({ on: !this.state.on }, () => {
      if (typeof onToggle === "function") {
        onToggle(this.state.on);
      }
    });
  };

  render() {
    // return (
    //   <div className="App">
    //     {React.Children.map(this.props.children, (child) => {
    //       return React.cloneElement(child, {
    //         on: this.state.on,
    //         onClick: this.onClick
    //       });
    //     })}
    //   </div>
    // );

    return (
      <ToggleContext.Provider
        value={{ on: this.state.on, onClick: this.onClick }}
      >
        {this.props.children}
      </ToggleContext.Provider>
    );
  }
}

export default function App() {
  return (
    <>
      <Toggle>
        <Toggle.CheckBox />
        <div>
          <Toggle.On>
            <h1>Hi</h1>
          </Toggle.On>
        </div>
        <Toggle.Off>
          <h1>Bye</h1>
        </Toggle.Off>
      </Toggle>
    </>
  );
}




//React.memo
//usecallback
//usememo
//react.window

