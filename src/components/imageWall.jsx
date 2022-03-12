import React from 'react';

export default class ImageWall extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        const listImage = this.props.images.filter(imgData => imgData.texte.includes(this.props.filterText.toLowerCase())).map ( imageData => <img src = {imageData.image} alt = {imageData.texte} title = {imageData.texte}
                                                    onMouseOver = { () => this.props.imageChanged(imageData.image, imageData.texte)} 
                                                        key = {imageData.image}/>);
        return (
          <div id = "mur">{listImage}</div>
        );
    }
}