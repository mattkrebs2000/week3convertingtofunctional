import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  componentDidMount = (props) => {
    console.log(this.props.todo);
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;


// import React, { useEffect } from "react";
// import PropTypes from "prop-types";

// const TodoItem = (props) => {
//   const getStyle = () => {
//     return {
//       background: "#f4f4f4",
//       padding: "10px",
//       borderBottom: "1px #ccc dotted",
//       textDecoration: props.todo.completed ? "line-through" : "none",
//     };
//   };

//   useEffect(() => {
//     console.log(props.todo);
//   }, []);

//   return (
//     <div style={getStyle()}>
//       <p>
//         <input
//           type="checkbox"
//           defaultChecked={props.todo.completed}
//           onChange={props.markComplete.bind(this, props.todo.id)}
//         />{" "}
//         {props.todo.title}
//         <button
//           onClick={props.delTodo.bind(this, props.todo.id)}
//           style={btnStyle}
//         >
//           x
//         </button>
//       </p>
//     </div>
//   );
// };

// // PropTypes
// TodoItem.propTypes = {
//   todo: PropTypes.object.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   delTodo: PropTypes.func.isRequired,
// };

// const btnStyle = {
//   background: "#ff0000",
//   color: "#fff",
//   border: "none",
//   padding: "5px 9px",
//   borderRadius: "50%",
//   cursor: "pointer",
//   float: "right",
// };

// export default TodoItem;
