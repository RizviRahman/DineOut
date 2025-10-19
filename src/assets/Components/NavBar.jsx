export default function NavBar({ user, onLogout }) {
    return (
        <nav className="bg-navbg rounded-full mt-4 px-8 py-3 flex justify-between items-center mx-6">
            <div className="flex items-center ">
                <div className="text-primary mr-2">
                    <img src="./assets/logo.svg" />
                </div>
                <h1 className="text-2xl font-bold"><span className="text-primary">Dine</span>Out</h1>
            </div>
            
        {user ? (
            <div className="flex items-center gap-4">
                <div className="text-sm text-gray-300">{user.username} ({user.role})</div>
                <button onClick={onLogout} className="bg-gray-800 text-xs px-3 py-1 rounded">Logout</button>
            </div>
        ) : null}
            
        </nav>
    )
}