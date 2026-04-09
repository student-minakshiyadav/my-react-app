function Profile(){
    return(
        <div>
            <h1>Profile card challenge</h1>
            <ProfileCard
            name="Alice"
            age={30}
            greeting={
                <div>
                    <strong>Hii alice have a wonderful day!</strong>
                </div>
            }
            >
                <p>Hobbies:Resdind,Hiking</p>
                <button>Contact</button>
            </ProfileCard>
            <ProfileCard
            name="Bob"
            age={25}
            greeting={
                <div>
                    <strong>hello bob keep up great work</strong>
                </div>
            }
            >
                <p>Hobbies: gaming , cooking</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    );
}
export default Profile;
function ProfileCard({name,age,greeting,children}){
// const {name,age,greeting,children}=props;

    return(
        <>
        <h2>name:{name}</h2>
        <p>age:{age}</p>
        <p>{greeting}</p>
        <div>{children}</div>
        </>
    );
}