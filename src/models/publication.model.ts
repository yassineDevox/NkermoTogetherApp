export class Publication {

    public publicationId;
    public description;
    public dateCreation;
    public dateDebut;
    public duree;
    public type;
    public numberLikes;
    public prix;
    public userId;
    public etat;
    public niveau;
    public firstName;
    public lastName;

    constructor(data? : any) {
        this.dateCreation = data.dateCreation;
        this.dateDebut = data.dateDebut;
        this.description = data.description;
        this.duree = data.duree;
        this.etat = data.etat;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.niveau = data.niveau;
        this.numberLikes = data.numberLikes;
        this.prix = data.prix;
        this.publicationId = data.publicationId;
        this.type = data.type;
        this.userId = data.userId;

    }

}