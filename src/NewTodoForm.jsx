import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input
                    value={newItem}
                    //On Change function allows value to be updated. If there was no OnChange the input would always be reset to newItem.
                    //newItem is = "". The onChange allows the newItem value to be updated to the targets value
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    id="item" />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}