const data = {
    users: [
        {
            id: 1,
            age: 29,
            name: "Adam",
            sex: "male"
        },
        {
            id: 2,
            age: 22,
            name: "Magda",
            sex: "female",
        },
        {
            id: 3,
            age: 25,
            name: "Ola",
            sex: "female",
        },
        {
            id: 4,
            age: 67,
            name: "Stanisław",
            sex: "male"
        },
    ]
}

const Item = ({ user }) => (
    <div className="userInfo">
        <h2>Użytkownik: {user.name}</h2>
        <h3>Unformacje o użytkowniku:</h3>
        <p>Wiek użytkownika: <strong>{user.age} lat</strong></p>
        <p>Płeć użytkownika: {user.sex} </p>
    </div>
)

class ListItems extends React.Component {
    state = {
        select: "all",
    }

    handleUsersFilter(option) {
        this.setState({
            select: option
        })
    }

    usersList = () => {
        let users = this.props.data.users;
        switch (this.state.select) {
            case "all":
                return users.map(user => <Item user={user} key={user.id} />)
            case "female":
                users = users.filter(user => user.sex === "female");
                return users.map(user => <Item user={user} key={user.id} />)
            case "male":
                users = users.filter(user => user.sex === "male");
                return users.map(user => <Item user={user} key={user.id} />)
            default:
                return "Brak danych"
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.handleUsersFilter.bind(this, "all")}>Wszyscy</button>
                <button onClick={this.handleUsersFilter.bind(this, "female")}>Kobiety</button>
                <button onClick={this.handleUsersFilter.bind(this, "male")}>Mężczyźni</button>
                {this.usersList()}

            </div>
        )
    }
}




ReactDOM.render(<ListItems data={data} />, document.getElementById('app'))