#!/bin/bash
mkdir -p public/images

# Unsplash Images
curl -L "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop" -o public/images/horizon-1bhk.jpg
curl -L "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" -o public/images/azure-2bhk.jpg
curl -L "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" -o public/images/hero-main.jpg
curl -L "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" -o public/images/pinnacle-3bhk.jpg
curl -L "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop" -o public/images/interior-master.jpg
curl -L "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop" -o public/images/interior-bath.jpg
curl -L "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1000&auto=format&fit=crop" -o public/images/exterior-smart.jpg
curl -L "https://images.unsplash.com/photo-1600607687940-4e524cb35a33?q=80&w=1000&auto=format&fit=crop" -o public/images/interior-living.jpg
curl -L "https://images.unsplash.com/photo-1531971589569-0d93a00d4886?q=80&w=1000&auto=format&fit=crop" -o public/images/master-plan.jpg
curl -L "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2000&auto=format&fit=crop" -o public/images/amenity-gym.jpg
curl -L "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2000&auto=format&fit=crop" -o public/images/amenity-pool.jpg
curl -L "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2000&auto=format&fit=crop" -o public/images/amenity-lounge.jpg
curl -L "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2000&auto=format&fit=crop" -o public/images/exterior-night.jpg
curl -L "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop" -o public/images/connectivity-road.jpg
curl -L "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2070&auto=format&fit=crop" -o public/images/connectivity-metro.jpg
curl -L "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?q=80&w=1000&auto=format&fit=crop" -o public/images/interior-detail.jpg
curl -L "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" -o public/images/about-office.jpg

# Pattern Textures
curl -L "https://www.transparenttextures.com/patterns/cubes.png" -o public/images/bg-cubes.png
curl -L "https://www.transparenttextures.com/patterns/carbon-fibre.png" -o public/images/bg-carbon.png
