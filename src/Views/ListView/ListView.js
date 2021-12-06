import TodoList from 'components/TodoList';
import { React, Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import './ListView.scss';
import Modal from 'components/Modal';
import TodoEditor from 'components/TodoEditor/TodoEditor';
import Container from 'components/Container';
import TodoFilter from 'components/TodoFilter/TodoFilter';
import IconButton from '../../components/IconButton/IconButton';
import { ReactComponent as AddIcon } from '../../components/icons/plus.svg';

class ListView extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div className="ListViewContainer">
        <div className="HeaderContainer">
          <h1 className="Heading">Task list:</h1>
          <TodoFilter />
          <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
            <AddIcon width="30" height="30" />
          </IconButton>
        </div>

        <hr />

        <TodoList />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSave={this.toggleModal} />
          </Modal>
        )}
      </div>
    );
  }
}

export default ListView;
