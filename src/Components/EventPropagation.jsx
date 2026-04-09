export const EventPropagation=()=>{
    const handleGrandParent=()=>{
        console.log("grandparent clicked");
    };

    const handleParentClick=()=>{
        console.log("parent clicked");
    };

    const handleChildClick=(event)=>{
        console.log(event);
        event.stopPropagation();
        console.log("child clicked");
    };
    return(
        <section className="main-div">
            <div className="g-div" onClickCapture={handleGrandParent}>
            <div className="p-div" onClickCapture={handleParentClick}>
            <button className="c-div" onClickCapture={handleChildClick}>
                child div

            </button>
            </div>
            </div>
        </section>
    );
};