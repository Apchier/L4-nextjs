'use client';
import { Button } from '@/components/ui/button';
import { useDays } from '../hooks/useDays';
import { PageContainer } from '@/components/layouts/PageContainer';

const days: string[] = [
    'senin',
    'selasa',
    'rabu',
    'kamis',
    'jumat',
    'sabtu',
    'minggu',
];

export const DaysPage = () => {
    const { day, handleButton } = useDays()

    return (
        <PageContainer className='flex flex-col gap-2 justify-center items-center'>
            <span className='capitalize'>Hari : {day}</span>
            <div className='flex gap-5 flex-wrap'>
                {days.map((day, index) => (
                    <Button
                        className='capitalize'
                        onClick={() => handleButton(day)}
                        key={index}>
                        {day}
                    </Button>
                ))}
            </div>
        </PageContainer>
    );
};