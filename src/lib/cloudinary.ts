import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name:import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export function getCloudinaryUrl(
  publicId: string,
  options?: {
    width?: number;
    height?: number;
    quality?: number | 'auto';
    format?: 'auto' | 'webp' | 'jpg' | 'png';
  }
): string {
  const { width, height, quality = 'auto', format = 'auto' } = options || {};

  const transformations: string[] = [];

  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (quality) transformations.push(`q_${quality}`);
  if (format) transformations.push(`f_${format}`);

  return cloudinary.url(publicId, {
    transformation: transformations.join(','),
  });
}

export interface CatPhoto {
  publicId: string;
  alt: string;
  url: string;
}

export async function getCatPhotos(limit = 20): Promise<CatPhoto[]> {
  // For now, return placeholder structure
  // In production, this would fetch from Cloudinary API using cloudinary.api.resources
  // with type: 'upload', prefix: 'cat-photos', max_results: limit
  
  const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME;
  
  if (!cloudName) {
    // Return placeholder if Cloudinary not configured
    return Array.from({ length: limit }, (_, i) => ({
      publicId: `cat-photos/cat-${i + 1}`,
      alt: `Cat photo ${i + 1}`,
      url: '', // Placeholder URL
    }));
  }
  
  try {
    const result = await cloudinary.search
      .expression('folder:cat-photos')
      .max_results(limit)
      .execute();

    return result.resources.map((resource: { public_id: string; secure_url: string }) => ({
      publicId: resource.public_id,
      alt: `Cat photo`,
      url: resource.secure_url,
    }));
  } catch (error) {
    console.error('Error fetching cat photos from Cloudinary:', error);
    // Return placeholders on error
    return Array.from({ length: limit }, (_, i) => ({
      publicId: `cat-photos/cat-${i + 1}`,
      alt: `Cat photo ${i + 1}`,
      url: '',
    }));
  }
}

export async function uploadCatPhoto(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: 'cat-photos',
          resource_type: 'image',
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else if (result) {
            resolve(result.secure_url);
          } else {
            reject(new Error('Upload failed'));
          }
        }
      )
      .end(buffer);
  });
}