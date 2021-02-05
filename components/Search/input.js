import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const TextInput = styled.TextInput`
  background-color: white;
  margin: 0px 30px;
  margin-bottom: 50px;
  padding: 10px 10px;
  border-radius: 15px;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => {
  return (
    <TextInput
      placeholder={placeholder}
      returnKeyType={"search"}
      autoCorrect={false}
      autoCompleteType={"off"}
      value={value}
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
    />
  );
};

Input.PropTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
