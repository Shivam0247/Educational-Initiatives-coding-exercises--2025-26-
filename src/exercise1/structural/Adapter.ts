class OldAPI {
    getDataXML(): string {
        return "<data><item>Hello XML</item></data>";
    }
}

interface NewAPI {
    getDataJSON(): object;
}

class Adapter implements NewAPI {
    constructor(private oldAPI: OldAPI) { }

    getDataJSON(): object {
        const xml = this.oldAPI.getDataXML();
        return { converted: xml }; // fake conversion
    }
}

// Demo
export function runAdapterDemo() {
    const oldApi = new OldAPI();
    const adapter = new Adapter(oldApi);
    console.log(adapter.getDataJSON());
}
