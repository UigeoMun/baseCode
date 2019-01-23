// @flow
import React, { Component, Fragment } from 'react' ;
import MainSidebar from '../../components/main/MainSidebar';
import { UserActions } from '../../store/actionCreators';
import { TodoActions } from '../../store/actionCreators';
import { type State } from '../../store';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { type Todo} from 'lib/data/todo'; 



type Props = {
  todos : Todo[];
}

class MainSidebarContainer extends Component<Props> {

    constructor (props) {
      super(props)
      console.log('gogo');
      TodoActions.readTodo( 5, 0 );
    }
    

    render() {
      const {todos} = this.props;
      console.log(todos);
      return (
        <MainSidebar items={todos}/>
      );
    }
}
  
export default connect(
  ({ todo }: State )=>({
    todos : todo.todos
  }),
  ()=>({})
)(MainSidebarContainer);