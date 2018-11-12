import  React  from  'react';

const  GenerateCitation = ({ selectCitation }) => {
    return (
        <div>
        <button  onClick={selectCitation}>Autre citation</button>
        </div>
    );
};

export  default  GenerateCitation;