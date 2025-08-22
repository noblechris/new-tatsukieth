document.addEventListener('DOMContentLoaded', () => {
    const canvasContainer = document.querySelector('.canvas-container');
    const canvasElement = document.getElementById('meme-canvas');
    const imageUpload = document.getElementById('image-upload');
    const textInput = document.getElementById('text-input');
    const addTextBtn = document.getElementById('add-text-btn');
    const fontSelect = document.getElementById('font-select');
    const colorPicker = document.getElementById('color-picker');
    const downloadBtn = document.getElementById('download-btn');
    const presetImagesContainer = document.querySelector('.preset-images');

    // --- Canvas Initialization ---
    const canvas = new fabric.Canvas('meme-canvas', {
        width: 500,
        height: 500,
        backgroundColor: '#1a1a1a'
    });

    function fitCanvasToContainer() {
        const containerWidth = canvasContainer.offsetWidth;
        const scale = containerWidth / canvas.getWidth();
        canvas.setDimensions({ width: containerWidth, height: canvas.getHeight() * scale });
        canvas.renderAll();
    }
    fitCanvasToContainer();
    window.addEventListener('resize', fitCanvasToContainer);


    // --- Image Handling ---
    const presetImagePaths = Array.from({length: 8}, (_, i) => `assets/images/nft-placeholder-${i + 1}.png`);

    presetImagePaths.forEach(path => {
        const img = document.createElement('img');
        img.src = path;
        img.alt = `Preset ${path}`;
        img.addEventListener('click', () => {
            document.querySelectorAll('.preset-images img').forEach(i => i.classList.remove('selected'));
            img.classList.add('selected');
            setCanvasBackground(path);
        });
        presetImagesContainer.appendChild(img);
    });

    function setCanvasBackground(url) {
        fabric.Image.fromURL(url, (img) => {
            canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
                scaleX: canvas.width / img.width,
                scaleY: canvas.height / img.height
            });
        }, { crossOrigin: 'anonymous' });
    }

    imageUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (f) => {
            setCanvasBackground(f.target.result);
        };
        reader.readAsDataURL(file);
    });

    // --- Text Handling ---
    addTextBtn.addEventListener('click', () => {
        if (textInput.value === '') return;
        const text = new fabric.IText(textInput.value, {
            left: canvas.width / 2,
            top: canvas.height / 2,
            originX: 'center',
            originY: 'center',
            fontFamily: fontSelect.value,
            fill: colorPicker.value,
            stroke: '#000000',
            strokeWidth: 2,
            paintFirst: 'stroke',
        });
        canvas.add(text);
        canvas.setActiveObject(text);
        textInput.value = '';
    });

    function updateActiveText(property, value) {
        const activeObject = canvas.getActiveObject();
        if (activeObject && activeObject.type.includes('text')) {
            activeObject.set(property, value);
            canvas.renderAll();
        }
    }

    fontSelect.addEventListener('change', () => updateActiveText('fontFamily', fontSelect.value));
    colorPicker.addEventListener('input', () => updateActiveText('fill', colorPicker.value));

    // --- Download ---
    downloadBtn.addEventListener('click', () => {
        const dataURL = canvas.toDataURL({
            format: 'png',
            quality: 1.0
        });
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'tatsuki-meme.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
