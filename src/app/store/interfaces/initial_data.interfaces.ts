
export interface InitialData {
    id : string;
    name : string;
    slug : string;
    images : Image[];
    initial_level : string;
    max_level : string;
    rates : string;
    facebook_url : string;
    facebook_enable : Boolean;
    footer_menu : Page[];
    footer_info : string;
    footer_menu_enable : Boolean;
    footer_info_enable : Boolean;
    forum_url : string;
    last_online: Boolean;
    project: string;
}

export interface Image {
    name: string;
    image: string;
    types: string;
}

export interface Page {
    slug: string;
    title: string;
    content: string;
    published: Boolean;
    create_at: Date;
    modified_at: Date;
}
