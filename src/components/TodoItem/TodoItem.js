import React from 'react';
import './TodoItem.css';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CloseIcon from '@mui/icons-material/Close';

function TodoItem(props) {
    const onComplete = () => {
        alert(`Ya completaste la tarea: ${props.text}`);
    };
    const onDelete = () => {
        alert(`Eliminaste la tarea: ${props.text}`);
    };
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onComplete}
            >
                {
                    props.completed
                        ? <CheckBoxIcon/>
                        : <CheckBoxOutlineBlankIcon/>
                }

            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span
                className="Icon Icon-delete"
                onClick={onDelete}
            ><CloseIcon/></span>
        </li>
    )
}

export {TodoItem};