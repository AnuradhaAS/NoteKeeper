import React from 'react';
import { MdOutlinePushPin } from 'react-icons/md';
import { MdCreate, MdDelete } from 'react-icons/md';
import './NoteCard.css'; 
import moment from "moment";
const NoteCard = ({
    title,
    date,
    content,
    tags,
    isPinned,
    onEdit,
    onDelete,
    onPinNote,
}) => {
    return (
        <div className="note-card">
            <div className="note-card-header">
                <div>
                    <h6 className="note-card-title">{title}</h6>
                    <span className="note-card-date">{moment(date).format('Do MM YYYY')}</span>
                </div>
                <MdOutlinePushPin
                    className={`icon-btn ${isPinned ? 'pinned' : ''}`}
                    onClick={onPinNote}
                />
            </div>

            <p className="note-card-content">{content?.slice(0, 60)}</p>
            <div className="note-card-tags">{tags.map((item)=>`#${item}`)}</div>

            <div className="icon-container">
                <MdCreate className="icon-btn edit" onClick={onEdit} />
                <MdDelete className="icon-btn delete" onClick={onDelete} />
            </div>
        </div>
    );
};

export default NoteCard;
