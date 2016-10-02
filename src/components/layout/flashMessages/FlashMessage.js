import React from 'react';

class FlashMessage extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.autoDismiss = this.autoDismiss.bind(this);
  }

  componentWillUnmount() {
    this.onClick();
  }

  onClick() {
    // transition animation would be nice
    this.props.deleteFlashMessage(this.props.message.id);
  }

  autoDismiss() {
    new Promise((resolve) => {
      setTimeout(resolve, 2500);
    }).then(() => {
      this.onClick();
    });
  }

  render() {
    // this.autoDismiss();

    const { text } = this.props.message;
    return (
      <div className="alert alert-danger">
        <button onClick={this.onClick} className="close"><span>&times;</span></button>
        {text}
      </div>
    );
  }
}

FlashMessage.propTypes = {
  message: React.PropTypes.object.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired,
};

export default FlashMessage;
