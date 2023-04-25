import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {
    return (
        <div className='lva-categories'>
            <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='lva-categories-select'
            >
                <option value=''>Tous</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories