import React from 'react';

interface IProps {
}

interface IState {
}

export default class Dashboard extends React.Component<IProps, IState> {

  state: any = { };
  
  constructor(props: IProps) {
    super(props);

    this.state = { };
  }

  render() {
    return (
      <React.Fragment>
        <span>Dashboard</span>
      </React.Fragment>
    );
  }

  // openLoginWindow(code: string) {
  //   return <img src={tileImgs[code]} />
  // }

  updateDimensions = () => {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

}