import React from 'react';
import PropTypes from 'prop-types';
import { defaultProps } from 'react-select/src/Select';
import { Button } from 'reactstrap';
import './PhotoCard'

PhotoCard.propTypes = {
    photo: PropTypes.object,
    onEditClick: PropTypes.func,
    onRemoveClick: PropTypes.func
};

PhotoCard.defaultProps= {
    photo: {},
    onEditClick: null,
    onRemoveClick: null,
}

function PhotoCard(props) {
    const { photo, onEditClick, onRemoveClick}    = props;
    const handleEditClick = ()=>{
        if(onEditClick) onEditClick(photo)
    }
    const handleRemovetClick = ()=>{
        if(onRemovetClick) onRemoveClick(photo)
    }
    return (
        <div className="photo">
            <img src={photo.photo} alt={photo.title}/>
            <div className="photo__overlay">
    <h3 className="photo__title">{photo.title}</h3>

    <div className="photo__actions">
        <div>
            <Button outline size="sm" color="light" onClick={handleEditClick}>
                Edit
            </Button>
            <Button outline size="sm" color="danger" onClick={handleRemovetClick}>
                Delete
            </Button>
        </div>
    </div>
            </div>
        </div>
    );
}

export default PhotoCard;