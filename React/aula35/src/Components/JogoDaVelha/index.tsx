import React, { Component } from 'react';

const gridStyle = {
  display: "grid",
  gridTemplate: `
    ". . ."
    ". . ."
    ". . ."
  `,
  textAlign: "center",
  border: "2px #000 solid",
  width: "300px",
  height: "300px"
};

const liStyle = {
  border: "1px #000 solid"
};

export default class JogoDaVelha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jogoInicial: [
        [false, false, false],
        [false, false, false],
        [false, false, false]
      ]
    };
  }

  handleClick = (rowIndex, cellIndex) => {
    const { jogoInicial } = this.state;
    const updatedJogoInicial = [...jogoInicial]; // cria uma cópia do jogoInicial
    updatedJogoInicial[rowIndex][cellIndex] = true; // atualiza o valor correspondente para true
    this.setState({ jogoInicial: updatedJogoInicial }); // atualiza o estado com o novo jogoInicial
  };

  render() {
    const { jogoInicial } = this.state;

    return (
      <ul style={gridStyle}>
        {jogoInicial.map((row, rowIndex) => (
          <li
            onClick={() => this.handleClick(rowIndex, 0)} // aqui, 0 representa a primeira célula da linha, você pode atualizar para os outros índices também
            key={rowIndex}
            style={liStyle}
          >
            {row.map((cell, cellIndex) => (
              <span key={cellIndex}>{cell ? "●" : ""}</span> // exibe a bolinha se o valor for true
            ))}
          </li>
        ))}
      </ul>
    );
  }
}
