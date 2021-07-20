import UserCard from "./UserCard";

const UserList = (props) => {
    return (
        <div className="row">
            {
                props.users.map(user => (
                    <div className="col-lg-4">
                        <UserCard user={user} key={user.id} />
                    </div>
                ))
            }
       </div>
    )
}

export default UserList;