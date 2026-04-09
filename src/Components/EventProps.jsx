export const EventProps=()=>{
    const HandleWelcomeUser=(user)=>{
        alert(`hey , ${user}`);
    };

    const handleHover=()=>{
        alert(`hey thanks for hovering me `);
    };

    return(
        <>
        <WelcomeUser
        onClick={()=>HandleWelcomeUser("minakshi")}
        onMouseEnter={handleHover}
        />
        </>
    );
};

const WelcomeUser =(props)=>{
    const {onClick,onMouseEnter}=props;
    const handleGreeting=()=>{
        console.log(`hey user,welcome`);
        onClick();
    };
    return(
        <>
        <button onClick={onClick}>Click</button>
        <button onMouseEnter={onMouseEnter}>hover me</button>
        <button onClick={handleGreeting}>greting button</button>
        </>
    );
};