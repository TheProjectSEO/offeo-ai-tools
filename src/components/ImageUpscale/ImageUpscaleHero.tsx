'use client'

import { useState } from 'react'
import { ArrowUp, Sparkles, Download, Upload, Image as ImageIcon } from 'lucide-react'
import AIGirlfriendWidget from '@/components/AIGirlfriendWidget'

export default function ImageUpscaleHero() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isUpscaling, setIsUpscaling] = useState(false)
  const [upscaledImage, setUpscaledImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [provider, setProvider] = useState<string | null>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Check file type
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file')
        return
      }
      
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB')
        return
      }

      setSelectedFile(file)
      setError(null)
      
      // Create preview URL
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleUpscale = async () => {
    if (!selectedFile) {
      setError('Please select an image to upscale')
      return
    }

    setIsUpscaling(true)
    setError(null)
    
    try {
      const formData = new FormData()
      formData.append('image', selectedFile)

      const response = await fetch('/api/upscale-image', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to upscale image')
      }

      const data = await response.json()
      setUpscaledImage(data.imageUrl)
      setProvider(data.provider)
    } catch (err) {
      setError('Failed to upscale image. Please try again.')
      console.error('Error upscaling image:', err)
    } finally {
      setIsUpscaling(false)
    }
  }

  const handleDownload = () => {
    if (upscaledImage) {
      const link = document.createElement('a')
      link.href = upscaledImage
      link.download = 'upscaled-image.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      const fakeEvent = {
        target: { files: [file] }
      } as any
      handleFileSelect(fakeEvent)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden pt-20" style={{background: '#FFFDF9'}}>
      {/* Premium gradient background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div 
          className="absolute -inset-4 rounded-full blur-3xl" 
          style={{background: 'linear-gradient(to right, #06B6D4, #3B82F6, #8B5CF6)'}}
        ></div>
      </div>
      
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main heading */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{background: '#F5F1EA'}}>
              <ArrowUp className="w-3 h-3 text-blue-500" />
              <span className="text-sm font-medium" style={{color: '#111111'}}>AI Image Upscale</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6" style={{color: '#111111'}}>
              Enhance image quality<br />with AI upscaling
            </h1>
            
            <p className="text-lg max-w-2xl mx-auto mb-8" style={{color: '#666666'}}>
              Transform low-resolution images into high-quality masterpieces. Our AI upscaling technology preserves details while dramatically increasing resolution.
            </p>
          </div>

          {/* Upload interface */}
          <div className="max-w-4xl mx-auto mb-12">
            <div 
              className="relative border-2 border-dashed border-gray-300 rounded-3xl p-8 md:p-12 bg-white/50 backdrop-blur-sm"
              style={{minHeight: '400px'}}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Upload Section */}
                <div>
                  <h2 className="text-xl font-semibold mb-4" style={{color: '#111111'}}>
                    Upload your image
                  </h2>
                  
                  <div 
                    className="relative mb-6 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center transition-colors hover:border-gray-400"
                    style={{background: '#FFFFFF', minHeight: '200px'}}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    {previewUrl ? (
                      <div className="relative">
                        <img 
                          src={previewUrl} 
                          alt="Preview" 
                          className="max-h-32 mx-auto rounded-lg object-contain"
                        />
                        <div className="mt-4">
                          <p className="text-sm text-gray-600">{selectedFile?.name}</p>
                          <p className="text-xs text-gray-400">
                            {selectedFile && (selectedFile.size / (1024 * 1024)).toFixed(2)}MB
                          </p>
                          <button
                            onClick={() => {
                              setSelectedFile(null)
                              setPreviewUrl(null)
                              setUpscaledImage(null)
                              if (previewUrl) URL.revokeObjectURL(previewUrl)
                            }}
                            className="mt-2 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">Drag and drop your image here</p>
                        <p className="text-sm text-gray-400 mb-4">or</p>
                        <label className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl cursor-pointer hover:from-blue-700 hover:to-purple-700 transition-colors">
                          <Upload className="w-4 h-4" />
                          Select Image
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileSelect}
                            className="hidden"
                          />
                        </label>
                        <p className="text-xs text-gray-400 mt-3">Supports JPG, PNG, WebP • Max 10MB</p>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleUpscale}
                    disabled={isUpscaling || !selectedFile}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {isUpscaling ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Enhancing Quality...
                      </>
                    ) : (
                      <>
                        <ArrowUp className="w-5 h-5" />
                        Upscale Image
                      </>
                    )}
                  </button>

                  {error && (
                    <div className="mt-4 p-3 bg-red-100 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}
                </div>

                {/* Preview Section */}
                <div>
                  <h2 className="text-xl font-semibold mb-4" style={{color: '#111111'}}>
                    Enhanced Image
                  </h2>
                  
                  <div className="aspect-square rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden" style={{background: '#FFFFFF'}}>
                    {upscaledImage ? (
                      <>
                        <img 
                          src={upscaledImage} 
                          alt="Upscaled image" 
                          className="w-full h-full object-contain rounded-xl"
                        />
                        <button
                          onClick={handleDownload}
                          className="absolute top-4 right-4 p-3 bg-black/80 text-white rounded-full hover:bg-black transition-colors"
                          title="Download enhanced image"
                        >
                          <Download className="w-5 h-5" />
                        </button>
                      </>
                    ) : (
                      <div className="text-center">
                        <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 mb-2">Your enhanced image will appear here</p>
                        <p className="text-sm text-gray-400">Higher resolution, better quality</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Before/After comparison */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-sm mb-6" style={{color: '#666666'}}>
              See the difference AI upscaling makes
            </p>
            
            <div className="flex items-center justify-center gap-8">
              {/* Before */}
              <div className="relative">
                <div 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-lg relative overflow-hidden"
                  style={{background: 'linear-gradient(135deg, #FEE2E2, #FECACA)'}}
                >
                  <div className="absolute inset-2 bg-white rounded-xl flex items-center justify-center">
                    <div className="w-8 h-12 rounded-lg bg-gray-300"></div>
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="px-2 py-1 bg-gray-800 text-white text-xs rounded">Before</div>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="text-2xl text-gray-400">→</div>
              
              {/* After */}
              <div className="relative">
                <div 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-lg relative overflow-hidden"
                  style={{background: 'linear-gradient(135deg, #DBEAFE, #BFDBFE)'}}
                >
                  <div className="absolute inset-2 bg-white rounded-xl flex items-center justify-center">
                    <div className="w-8 h-12 rounded-lg bg-blue-400"></div>
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="px-2 py-1 bg-blue-600 text-white text-xs rounded">Enhanced</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 text-sm flex-wrap" style={{color: '#666666'}}>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              <span>4x resolution boost</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
              <span>Detail preservation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              <span>Print-ready quality</span>
            </div>
          </div>
        </div>
      </main>
      
      <AIGirlfriendWidget />
    </div>
  )
}