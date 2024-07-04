
const Sectiontitle = ({heading, subheading}) => {

    return (
        <div className="w-1/3 mx-auto text-center">

            <p className="text-yellow-600 text-center mb-5">{subheading}</p>
            <h3 className="text-center text-3xl border-y-4 py-4 mb-20">{heading}</h3>
            
        </div>
    );
};

export default Sectiontitle;