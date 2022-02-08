import React from 'react';
import './TodoItem.css';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CloseIcon from '@mui/icons-material/Close';

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
                {
                    props.completed
                        ? <CheckBoxIcon/>
                        : <CheckBoxOutlineBlankIcon/>
                }

            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span className="Icon Icon-delete"><CloseIcon/></span>
        </li>
    )
}

export {TodoItem};