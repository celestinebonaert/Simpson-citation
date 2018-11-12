import  React  from  'react';

const  DisplayCitation = ({ citation }) => {
    return (
        <div  className="DisplayCitation">
            <ul>
                <li>
                    Nom : {citation.character}
                </li>

                <img  src={citation.image}  alt="image"  />
                
                <li>
                    Citation : {citation.quote}
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayCitation;