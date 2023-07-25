import type { PageLoad } from './$types';

export const ssr = false;

export const load = (async ({ fetch }) => {    
    const queryParams = [
        `key=${import.meta.env.VITE_API_KEY}`,
        `pageSize=10`,
        `fields=roles(*)`,
    ].join('&');    

    const res = await fetch(
        'https://iam.googleapis.com/v1/roles' + `?${queryParams}`,
    );
    const rolesList = await res.json();
    
    return {roles: rolesList.roles};
}) satisfies PageLoad;