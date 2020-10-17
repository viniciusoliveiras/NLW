const Database = require('./db.js');

Database.then(async db => {
    //  inserir dados na tabela 
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-22.8725251",
            "-43.2992252",
            "Lar dos Meninos",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "(21) 99999-9999"
            "https://images.unsplash.com/photo-1602827827969-a3994ddc9d98?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas Das 18h até 8h",
            "0"
        );
    `)

    //  consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //  consultar somente 1 orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id="2"')
    console.log(orphanage)
})