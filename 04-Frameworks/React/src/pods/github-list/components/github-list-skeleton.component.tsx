import { Card, CardContent, Skeleton, CardActions } from '@mui/material';

export const GithubListSkeletonComponent: React.FC = () => {
    return (
        <section
            className="grid justify-items-center grid-rows-2 gap-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2"
            role="status"
            aria-label="Cargando lista de miembros"
        >
            {[...Array(6)].map((_, index) => (
                <Card key={index} className="flex flex-col items-center w-[280px]">
                    <CardContent className="flex flex-col items-center gap-1">
                        <Skeleton
                            variant="circular"
                            width={128}
                            height={128}
                            className="border-4 border-[#1b5e20]"
                        />
                        <Skeleton variant="text" width={120} height={24} />
                    </CardContent>
                    <CardActions>
                        <Skeleton variant="rectangular" width={100} height={36} />
                    </CardActions>
                </Card>
            ))}
            <span className="sr-only">Cargando lista de miembros, por favor espere...</span>
        </section>
    );
}; 