function ProfilePage() {

    function handleLogoutSubmit(e) {
        e.preventDefault();
        // Need logout functionality here (DELETE request?)
    }

    return (
        <>
            <h3>ProfilePage goes here</h3>
            <button onClick={handleLogoutSubmit}>Logout</button>
        </>
    );
}

export default ProfilePage;