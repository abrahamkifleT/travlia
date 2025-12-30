import React from 'react';
import { Card, Typography, LinearProgress, Box, Rating } from '@mui/material';

const RatingCard = () => {
    return (
        <Card sx={{
            borderRadius: '16px',
            boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
            padding: '20px',
            maxWidth: '350px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
        }}>
            {/* Left Side: Score */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '3rem', lineHeight: 1 }}>
                    4.9
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#555' }}>
                    Excellent
                </Typography>
                <Rating value={4.9} precision={0.1} readOnly size="small" sx={{ color: '#00C896', my: 0.5 }} />
                <Typography variant="caption" sx={{ color: '#777' }}>
                    12K reviews
                </Typography>
            </Box>

            {/* Right Side: Bars */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                    { stars: '5-star', value: 90, color: '#00C896' },
                    { stars: '4-star', value: 10, color: '#8ADD56' },
                    { stars: '3-star', value: 5, color: '#FFD700' },
                    { stars: '2-star', value: 2, color: '#FF9500' },
                    { stars: '1-star', value: 1, color: '#FF3B30' },
                ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Typography variant="caption" sx={{ minWidth: '40px', fontWeight: 'medium', color: '#555' }}>
                            {item.stars}
                        </Typography>
                        <LinearProgress
                            variant="determinate"
                            value={item.value}
                            sx={{
                                flex: 1,
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: '#F0F0F0',
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: item.color,
                                    borderRadius: 4
                                }
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </Card>
    );
};

export default RatingCard;
