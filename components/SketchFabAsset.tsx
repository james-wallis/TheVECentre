interface Props {
    modelId: string
}

const SketchFabAsset = ({ modelId }: Props) => (
    <div className="my-10 h-96 w-screen flex justify-center items-center">
        <iframe
            className="w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 h-full"
            title="A 3D model from SketchFab"
            width="100%"
            height="100%"
            src={`https://sketchfab.com/models/${modelId}/embed?autostart=0&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1`}
            allow="autoplay; fullscreen; vr"
         />
    </div>
)

export default SketchFabAsset